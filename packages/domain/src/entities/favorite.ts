export interface FavoriteData {
  id: string;
  heroId: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Favorite {
  public readonly id: string;
  public readonly heroId: string;
  public readonly userId: string;
  public readonly createdAt: Date;
  public updatedAt: Date;

  constructor(data: FavoriteData) {
    if (!data.id || data.id.trim() === '') throw new Error('Favorite ID cannot be empty');
    if (!data.heroId || data.heroId.trim() === '') throw new Error('Favorite heroId cannot be empty');
    if (!data.userId || data.userId.trim() === '') throw new Error('Favorite userId cannot be empty');
    this.id = data.id;
    this.heroId = data.heroId;
    this.userId = data.userId;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }
}


