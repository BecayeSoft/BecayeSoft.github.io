export class User {
    private _id: string;
    private _name: string;
    private _avatar: string;


	constructor(id?: string, name?: string, avatar?: string) {
        this._id = id ? id : '';
        this._name = name ? name : '';
        this._avatar = avatar ? avatar : '';
	}
    

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter avatar
     * @return {string}
     */
	public get avatar(): string {
		return this._avatar;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter avatar
     * @param {string} value
     */
	public set avatar(value: string) {
		this._avatar = value;
	}
}