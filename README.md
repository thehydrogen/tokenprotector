# Token Protector
🔐 - A module that protects your Discord bot token when evaluating.

## How it works
Token Protector takes in a few arguments: your Discord client object, what you're trying to evaluate, the result of the evaluation, and what you call your client.
It then returns `false` for safe and `true` for unsafe.
