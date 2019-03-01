module.exports = async (client, evalString, evalResult, clientName) => {
    if (evalString.includes(`${clientName}.token`)) {
        return 1;
    }
    if (evalString.includes('token')) {
        return 1;
    }
    if (evalResult.includes(client.token)) {
        return 1;
    }
    if (evalString.includes('client[') && evalString.includes('t')) {
        return 1;
    }
    
    return 0;
};
