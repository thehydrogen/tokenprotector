// created by hydrogen am bored
// v0.2

module.exports = async (client, evalString, evalResult, clientName) => {
    let result = false;
    
    if (evalString.includes(`${clientName}.token`)
            || evalString.includes('token')
            || evalResult.includes(client.token)
            || (evalString.includes('client[') && evalString.replace('client[', '').includes('t'))
            || evalResult.join('') == client.token) {
        result = true;
    }
    
    return result;
};
