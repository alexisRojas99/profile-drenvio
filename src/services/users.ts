import { AuthAdapter } from "../api/fetchAuth";

const authAdapter = new AuthAdapter();

export const getUserProfile = async (filter?: string, search?: string) => {
	const response: any = await authAdapter.get("/", { params: { [filter as string]: search, nat: 'es' } }).catch((err) => {
		console.log("err", err.response);
		return err.response;
	});

	return response;
};
