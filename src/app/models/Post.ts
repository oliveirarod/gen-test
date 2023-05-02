export interface Post {
	id: string | null,
	userId: string | null,
	title: string | null,
	body: string | null,
	image?: string,
}