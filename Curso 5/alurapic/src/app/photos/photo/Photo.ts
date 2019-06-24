/**
 * Photo usada na tipagem da API.
 */
export interface Photo {
	id: number;
	postDate: Date;
	url: string;
	description: string;
	allowComments: boolean;
	likes: number;
	userId: number;
}