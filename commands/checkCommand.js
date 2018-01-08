function checkIt(message, list){
    var command = 'test';
    for(i = 0; i < list.length; ++i) {
        if(list[i] == message) {
            command = message;
            break;
        }
    }
    return message;
}

exports.checkIt = checkIt;