import { createContext, FC, ReactNode, useLayoutEffect, useState } from "react";
import { verifyToken } from "../services/auth/auth";
interface Context {
	user: null | Object;
	setUser: Function;
}

export const AuthContext = createContext<Context>({
	user: null,
	setUser: () => null,
});

interface Props {
	children?: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState<Object | null>(null);


	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
