interface ApiKeys {
	key: string;
	usage: number;
	limit: number;
}

class KeyHandler {
	private static instance: KeyHandler;
	private apiKeys: ApiKeys[] = [];
	private currentKey!: number;

	constructor() {
		if (typeof KeyHandler.instance === 'object') {
			return KeyHandler.instance;
		}

		KeyHandler.instance = this

		this.apiKeys = [
			{ key: process.env.KEY_1 as string, usage: 0, limit: 5 },
			{ key: process.env.KEY_2 as string, usage: 0, limit: 5 },
			{ key: process.env.KEY_3 as string, usage: 0, limit: 5 },
			{ key: process.env.KEY_4 as string, usage: 0, limit: 5 },
			{ key: process.env.KEY_5 as string, usage: 0, limit: 5 },
			{ key: process.env.KEY_6 as string, usage: 0, limit: 5 },
			{ key: process.env.KEY_7 as string, usage: 0, limit: 5 },
			{ key: process.env.KEY_8 as string, usage: 0, limit: 5 },
			{ key: process.env.KEY_9 as string, usage: 0, limit: 5 },
			{ key: process.env.KEY_10 as string, usage: 0, limit: 5 },
			{ key: process.env.KEY_11 as string, usage: 0, limit: 5 },
		]
		this.currentKey = 0
	}

	getKey(): string {
		let currentKey = this.apiKeys[this.currentKey]

		if (currentKey.usage >= currentKey.limit) {
			this.currentKey = (this.currentKey + 1) % this.apiKeys.length
			this.apiKeys[this.currentKey].usage = 0
			currentKey = this.apiKeys[this.currentKey]
		}

		currentKey.usage++
		return currentKey.key
	}
}

export default new KeyHandler();