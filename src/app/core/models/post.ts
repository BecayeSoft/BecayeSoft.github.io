import { Category } from "./category";
import { Tags } from "./tags";

export class Post {
    private _id: string;
    private _title: string;
    private _description: string = 'Read more...';
    private _content: string;
    private _image: string;
    private _image_author: string;
    private _id_category: string;
    private _tags: Tags[];
    private _comments: Comment[] = [];
    readonly createdAt = new Date();

	constructor(id: string, title: string, description: string, content: string, 
        image: string, image_author: string, id_category: string, tags: Tags[]) {
		
        this._id = id;
		this._title = title;
		this._description = description;
		this._content = content;
		this._image = image;
        this._image_author = image_author
		this._id_category = id_category;
		this._tags = tags;
		// this._comments = comments;
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
     * Getter image_author
     * @return {string}
     */
    public get image_author(): string {
        return this._image_author;
    }

    /**
     * Getter tags
     * @return {Tags[]}
     */
	public get tags(): Tags[] {
		return this._tags;
	}

    /**
     * Getter id_category
     * @return {Category}
     */
	public get id_category(): string {
		return this._id_category;
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
     * Setter image_author
     * @param {string} value
     */
    public set imageAuthor(value: string) {
        this._image_author = value;
    }

    /**
     * Setter tags
     * @param {Tags[]} value
     */
	public set tags(value: Tags[]) {
		this._tags = value;
	}

    /**
     * Setter id_category
     * @param {Category} value
     */
	public set id_category(value: string) {
		this._id_category = value;
	}

    /**
     * Setter comments
     * @param {Comment[]} value
     */
	public set comments(value: Comment[]) {
		this._comments = value;
	}


}