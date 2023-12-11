import { pathsToModuleNameMapper } from "ts-jest"
import { compilerOptions } from "./tsconfig.json"
import type { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
	roots: ["<rootDir>"],
	preset: "ts-jest",
	testEnvironment: "node",
	modulePaths: ["<rootDir>"],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: "<rootDir>/",
	}),
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
	},
}
export default jestConfig