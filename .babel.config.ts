const plugins = [
  "babel-plugin-transform-inline-environment-variables",
  "@babel/plugin-syntax-jsx",
  "babel-plugin-macros",
  [
    "@emotion/babel-plugin-jsx-pragmatic",
    {
      export: "jsx",
      import: "__cssprop",
      module: "@emotion/react",
    },
  ],
  [
    "@babel/plugin-transform-react-jsx",
    {
      pragma: "__cssprop",
      pragmaFrag: "React.Fragment",
    },
  ],
]

if (process.env.NODE_ENV !== "production") {
  plugins.push(["babel-plugin-typescript-to-proptypes", { comments: true }])
}

module.exports = {
  plugins,
  presets: ["@babel/preset-typescript"],
}
