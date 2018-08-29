var expect = require('expect');
var {generateMessage} = require('./message')

describe('generateMessage', (res,req)=>{
    it('Should generate correct message object', ()=>{
        var from = 'Lars';
        var text = "Some message";
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number')
        expect(message).toMatchObject({
            from,
            text
        });
    })
})