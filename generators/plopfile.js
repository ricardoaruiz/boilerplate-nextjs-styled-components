module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Component',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      }
    ],

    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/components/index.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/components/styles.ts.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/components/test.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/components/stories.tsx.hbs'
      }
    ]
  })
}
