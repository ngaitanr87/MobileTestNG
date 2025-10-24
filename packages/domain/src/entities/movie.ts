export interface MovieData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  releaseDate: Date;
  duration: number;
  rating: number;
}

export class Movie {
  public readonly id: string;
  public readonly title: string;
  public readonly description: string;
  public readonly imageUrl: string;
  public readonly releaseDate: Date;
  public readonly duration: number;
  public readonly rating: number;

  constructor(data: MovieData) {
    if (!data.id || data.id.trim() === '') throw new Error('Movie ID cannot be empty');
    if (!data.title || data.title.trim() === '') throw new Error('Movie title cannot be empty');
    if (!data.imageUrl || data.imageUrl.trim() === '') throw new Error('Movie imageUrl cannot be empty');
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.imageUrl = data.imageUrl;
    this.releaseDate = data.releaseDate;
    this.duration = data.duration;
    this.rating = data.rating;
  }
}


