// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
//                 thomasfn <https://github.com/thomasfn>
//                 Teoxoy <https://github.com/teoxoy>
//                 Zaoqi <https://github.com/zaoqi>
//                 Benjamin-Dobell <https://github.com/Benjamin-Dobell>

import * as ast from "./types/ast";
export * from "./types/ast";

export interface Options {
	/** Explicitly tell the parser when the input ends. */
	wait: boolean;
	/** Store comments as an array in the chunk object. */
	comments: boolean;
	/** Track identifier scopes. */
	scope: boolean;
	/** Store location information on each syntax node. */
	locations: boolean;
	/** Store the start and end character locations on each syntax node. */
	ranges: boolean;
	/**
	 * A callback which will be invoked when a syntax node has been completed.
	 * The node which has been created will be passed as the only parameter.
	 */
	onCreateNode: (node: ast.Node) => void;
	/** A callback which will be invoked when a new scope is created. */
	onCreateScope: () => void;
	/** A callback which will be invoked when the current scope is destroyed. */
	onDestroyScope: () => void;
	/**
	 * A callback which will be invoked when a local variable is declared.
	 * The identifier will be passed as the only parameter.
	 */
	onLocalDeclaration: (identifier: ast.Identifier) => void;
	/** The version of Lua the parser will target; supported values are '5.1', '5.2', '5.3' and 'LuaJIT'. */
	luaVersion: "5.1" | "5.2" | "5.3" | "LuaJIT";
	/**
	 * Whether to allow code points ≥ U+0080 in identifiers, like LuaJIT does.
	 * See 'Note on character encodings' below if you wish to use this option.
	 * Note: setting luaVersion: 'LuaJIT' currently does not enable this option; this may change in the future.
	 */
	extendedIdentifiers: false;
}

export interface Token {
	type: number;
	value: string;
	line: number;
	lineStart: number;
	range: [number, number];
}

export interface Parser {
	write(segment: string): void;
	end(segment: string): ast.Chunk;
	lex(): Token;
}

export function parse(code: string, options: Partial<Options> & { wait: true }): Parser;
export function parse(code: string, options?: Partial<Options>): ast.Chunk;
export function parse(options?: Partial<Options>): Parser;
