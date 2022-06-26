import { Category } from "./category";
import { Tags } from "./tags";

export class Post {
    private _id: string;
    private _title: string;
    private _description: string;
    private _content: string;
    private _image: string;
    private _tags: Tags[];
    private _category: Category;
    private _comments: Comment[];
    readonly createdAt = new Date();

	constructor(id: string, title: string, description: string, content: string, image: string, tags: Tags[], category: Category, comments: Comment[]) {
		this._id = id;
		this._title = title;
		this._description = description;
		this._content = content;
		this._image = image;
		this._tags = tags;
		this._category = category;
		this._comments = comments;
	}

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter content
     * @return {string}
     */
	public get content(): string {
		return this._content;
	}

    /**
     * Getter image
     * @return {string}
     */
	public get image(): string {
		return this._image;
	}

    /**
     * Getter tags
     * @return {Tags[]}
     */
	public get tags(): Tags[] {
		return this._tags;
	}

    /**
     * Getter category
     * @return {Category}
     */
	public get category(): Category {
		return this._category;
	}

    /**
     * Getter comments
     * @return {Comment[]}
     */
	public get comments(): Comment[] {
		return this._comments;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter content
     * @param {string} value
     */
	public set content(value: string) {
		this._content = value;
	}

    /**
     * Setter image
     * @param {string} value
     */
	public set image(value: string) {
		this._image = value;
	}

    /**
     * Setter tags
     * @param {Tags[]} value
     */
	public set tags(value: Tags[]) {
		this._tags = value;
	}

    /**
     * Setter category
     * @param {Category} value
     */
	public set category(value: Category) {
		this._category = value;
	}

    /**
     * Setter comments
     * @param {Comment[]} value
     */
	public set comments(value: Comment[]) {
		this._comments = value;
	}


}