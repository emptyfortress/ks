module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"jquery": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"sourceType": "module"
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": ["error", { allow: ["warn", "error", "log"] }]
	}
};
