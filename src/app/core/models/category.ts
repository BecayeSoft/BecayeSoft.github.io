import { Categories } from "./categories";

export  class Category {
    private _doc_id: string;
    private _title: Categories;
    private _description: string;
    private _image: string;
    private _image_author: string;

	constructor(doc_id?: string, title?: Categories, description?: string, image?: string, image_author?: string) {
		this._doc_id = doc_id ? doc_id : '';
		this._title = title ? title : Categories.DataScience;
		this._description = description ? description : '';
		this._image = image ? image : '';
		this._image_author = image_author ? image_author : '';
	}


    /**
     * Getter doc_id
     * @return {string}
     */
	public get doc_id(): string {
		return this._doc_id;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): Categories {
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
     * Setter doc_id
     * @param {string} value
     */
	public set doc_id(value: string) {
		this._doc_id = value;
	}

    /**
     * Setter title
     * @param {Categories} value
     */
	public set title(value: Categories) {
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
    public set image_author(value: string) {
        this._image_author = value;
    }

}