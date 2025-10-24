export interface ComicData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  publishedDate: Date;
  pageCount: number;
  price: number;
}

export class Comic {
  public readonly id: string;
  public readonly title: string;
  public readonly description: string;
  public readonly imageUrl: string;
  public readonly publishedDate: Date;
  public readonly pageCount: number;
  public readonly price: number;

  constructor(data: ComicData) {
    if (!data.id || data.id.trim() === '') throw new Error('Comic ID cannot be empty');
    if (!data.title || data.title.trim() === '') throw new Error('Comic title cannot be empty');
    if (!data.imageUrl || data.imageUrl.trim() === '') throw new Error('Comic imageUrl cannot be empty');
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.imageUrl = data.imageUrl;
    this.publishedDate = data.publishedDate;
    this.pageCount = data.pageCount;
    this.price = data.price;
  }
}


