// Shared Hero type for presentation layer
export interface HeroData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  characteristics: {
    powers: string[];
    weaknesses: string[];
    affiliations: string[];
    firstAppearance: string;
    realName: string;
    species: string;
    gender: string;
    height: number;
    weight: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
