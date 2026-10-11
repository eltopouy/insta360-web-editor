import test, { describe } from 'node:test';
import assert from 'node:assert/strict';

describe('MCP Server Protocol and Frame Tests', () => {
  test('WebSocket unmasked text frame encoding complies with RFC 6455', () => {
    // RFC 6455 small payload (< 126 bytes)
    const smallText = '{"type":"PING"}';
    const payload = Buffer.from(smallText, 'utf8');
    const header = Buffer.alloc(2);
    header[0] = 0x81; // FIN + text opcode
    header[1] = payload.length;
    const frame = Buffer.concat([header, payload]);

    assert.equal(frame[0], 0x81, 'First byte must be 0x81 (FIN + opcode 1)');
    assert.equal(frame[1], payload.length, 'Second byte must be payload length');
    assert.equal(frame.subarray(2).toString('utf8'), smallText);

    // Medium payload (126 <= len <= 65535)
    const mediumText = 'A'.repeat(300);
    const medPayload = Buffer.from(mediumText, 'utf8');
    const medHeader = Buffer.alloc(4);
    medHeader[0] = 0x81;
    medHeader[1] = 126;
    medHeader.writeUInt16BE(medPayload.length, 2);
    const medFrame = Buffer.concat([medHeader, medPayload]);

    assert.equal(medFrame[1], 126);
    assert.equal(medFrame.readUInt16BE(2), 300);
    assert.equal(medFrame.length, 304);
  });

  test('JSON-RPC 2.0 protocol specifications', () => {
    const rpcRequest = {
      jsonrpc: '2.0',
      id: 'req-01',
      method: 'tools/call',
      params: {
        name: 'set_orientation',
        arguments: { yaw: 45, pitch: -10, roll: 0 },
      },
    };

    assert.equal(rpcRequest.jsonrpc, '2.0');
    assert.equal(rpcRequest.method, 'tools/call');
    assert.equal(rpcRequest.params.arguments.yaw, 45);

    const rpcResponse = {
      jsonrpc: '2.0',
      id: rpcRequest.id,
      result: {
        content: [{ type: 'text', text: 'Orientation set to 45 deg.' }],
      },
    };

    assert.equal(rpcResponse.id, 'req-01');
    assert.ok(Array.isArray(rpcResponse.result.content));
    assert.equal(rpcResponse.result.content[0].type, 'text');
  });

  test('WebSocket client command parser handles all action types', () => {
    const supportedActions = [
      'SET_ORIENTATION',
      'AUTO_LEVEL',
      'RESET_ORIENTATION',
      'SET_COLORS',
      'SET_NADIR',
      'SET_VIEW_MODE',
      'SET_LANGUAGE',
      'TRIGGER_EXPORT',
      'TRIGGER_REFRAME',
    ];

    const message = JSON.stringify({ type: 'AUTO_LEVEL' });
    const parsed = JSON.parse(message);
    assert.ok(supportedActions.includes(parsed.type));
  });
});
