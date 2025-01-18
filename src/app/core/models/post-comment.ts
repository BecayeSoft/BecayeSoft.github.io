import { User } from "./user";

export  class PostComment {
    private _id: string;
    private _user: User;
    private _date: Date;
    private _content: string;


	constructor(id?: string, user?: User, date?: Date, content?: string) {
		this._id = id || '';
		this._user = user || new User();
        this._date = new Date();
		this._content = content || '';
	}

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter user
     * @return {string}
     */
	public get user(): User {
		return this._user;
	}

    /**
     * Getter date
     * @return {Date}
     */
    public get date(): Date {
        return this._date;
    }
    

    /**
     * Getter content
     * @return {string}
     */
	public get content(): string {
		return this._content;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter user
     * @param {User} value
     */
	public set user(value: User) {
		this._user = value;
	}

    /**
     * Setter date
     * @param {string} value
     */
    public set date(value: Date) {
        this._date = value;
    }

    /**
     * Setter content
     * @param {string} value
     */
	public set content(value: string) {
		this._content = value;
	}



}