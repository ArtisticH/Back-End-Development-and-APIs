# Managing Packages with NPM

## How to Use package.json, the Core of Any Node.js Project or npm Package

The `package.json` file is the center of any Node.js project or npm package.  
It stores information about your project, similar to how the head section of an `HTML` document describes the content of a webpage.  
It consists of a single JSON object where information is stored in key-value pairs. There are only two required fields; `name` and `version`,  
but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.  

If you look at the file tree of your project, you will find the `package.json` file on the top level of the tree.  
This is the file that you will be improving in the next couple of challenges.  

One of the most common pieces of information in this file is the `author` field.  
It specifies who created the project, and can consist of a string or an object with contact or other details.  
An object is recommended for bigger projects, but a simple string like the following example will do for this project.  
```
"author": "Jane Doe",
```
Remember that you’re writing JSON, so all field names must use double-quotes (") and be separated with a comma (,).

## Add a Description to Your package.json

The next part of a good package.json file is the `description` field; where a short, but informative description about your project belongs.

If some day you plan to publish a package to npm, this is the string that should sell your idea to the user when they decide whether to install your package or not. However, that’s not the only use case for the description, it’s a great way to summarize what a project does. It’s just as important in any Node.js project to help other developers, future maintainers or even your future self understand the project quickly.


```
{
  "author": "hanna seo",
  "description": "A project that does something awesome",
	"name": "fcc-learn-npm-package-json",
	"dependencies": {
		"express": "^4.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	}
}
```

## Add Keywords to Your package.json
The `keywords` field is where you can describe your project using related keywords. Here's an example:
```
"keywords": [ "descriptive", "related", "words" ],
```
As you can see, this field is structured as an array of double-quoted strings.

## Add a License to Your package.json
The `license` field is where you inform users of what they are allowed to do with your project.

Some common licenses for open source projects include MIT and BSD. License information is not required, and copyright laws in most countries will give you ownership of what you create by default. However, it’s always a good practice to explicitly state what users can and can’t do. Here's an example of the license field:
```
"license": "MIT",
```
```
1. MIT 라이선스 (MIT License):

MIT 라이선스는 매우 자유로운 오픈 소스 소프트웨어 라이선스 중 하나입니다. 이 라이선스는 소프트웨어를 수정하고 재배포할 수 있는 자유를 허용합니다. 사용자는 소프트웨어를 상업적 및 비상업적 목적으로 사용할 수 있으며, 소프트웨어의 소스 코드를 포함한 복사본을 수정하고 재배포할 수 있습니다. 단, MIT 라이선스에 따른 모든 복사본과 소프트웨어의 일부에 원래 저작권 고지 및 라이선스 조건이 포함되어야 합니다.

2. BSD 라이선스 (Berkeley Software Distribution License):

BSD 라이선스는 MIT 라이선스와 유사한 자유로운 오픈 소스 라이선스입니다. BSD 라이선스도 소프트웨어를 수정하고 재배포할 수 있는 자유를 허용하며, 상업적 및 비상업적 사용이 가능합니다. BSD 라이선스에는 여러 버전이 있으며, 가장 널리 사용되는 3가지 버전은 "3-Clause BSD License" (또는 "New BSD License"), "2-Clause BSD License" (또는 "Simplified BSD License"), 그리고 "0-Clause BSD License" (또는 "Public Domain License")입니다. 각 버전은 약간 다른 조건을 가질 수 있으며, 사용자는 라이선스 파일 또는 소프트웨어의 문서에서 라이선스 조건을 확인해야 합니다.

MIT 및 BSD 라이선스는 오픈 소스 소프트웨어 개발 커뮤니티에서 널리 사용되며, 개발자들이 소프트웨어를 공유하고 협력하는 데 기여합니다. 이러한 라이선스를 사용하면 다른 개발자들이 여러 프로젝트에서 코드를 재사용하고 수정하여 개선할 수 있으므로 오픈 소스 생태계의 성장에 크게 기여하고 있습니다.
```

## Add a Version to Your package.json
A `version` is one of the required fields of your package.json file. This field describes the current version of your project. Here's an example:
```
"version": "1.2.0",
```

## Expand Your Project with External Packages from npm
One of the biggest reasons to use a package manager, is their powerful dependency management. Instead of manually having to make sure that you get all dependencies whenever you set up a project on a new computer, npm automatically installs everything for you. But how can npm know exactly what your project needs? Meet the `dependencies` section of your package.json file.

In this section, packages your project requires are stored using the following format:
```
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}
```
```
{
  "author": "hanna seo",
  "description": "A project that does something awesome",
  "keywords": [ "freecodecamp", "practice", "node-js" ],
  "license": "MIT",
  "version": "1.2.0",
	"name": "fcc-learn-npm-package-json",
	"dependencies": {
		"express": "^4.14.0",
    "@freecodecamp/example": "1.1.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	}
}
```

## Manage npm Dependencies By Understanding Semantic Versioning
`Versions` of the npm packages in the dependencies section of your package.json file follow what’s called Semantic Versioning (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer in order to clearly communicate what kind of changes projects can expect if they update.

Knowing SemVer can be useful when you develop software that uses external dependencies (which you almost always do). One day, your understanding of these numbers will save you from accidentally introducing breaking changes to your project without understanding why things that worked yesterday suddenly don’t work today. This is how Semantic Versioning works according to the official website:
```
"package": "MAJOR.MINOR.PATCH"
```
The MAJOR version should increment when you make incompatible API changes. The MINOR version should increment when you add functionality in a backwards-compatible manner. The PATCH version should increment when you make backwards-compatible bug fixes. This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.

- 주요 버전(MAJOR)은 호환되지 않는 API 변경이 있을 때 증가해야 합니다.
- 부 버전(MINOR)은 호환되는 방식으로 기능을 추가할 때 증가해야 합니다.
- 패치 버전(PATCH)은 호환되는 버그 수정이 있을 때 증가해야 합니다.

이것은 패치가 버그 수정이고, 부 버전은 새로운 기능을 추가하지만 기존 동작을 깨뜨리지 않습니다. 마지막으로, 주요 버전은 이전 버전과 호환되지 않는 변경 사항을 추가합니다.

## Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency
In the last challenge, you told npm to only include a specific version of a package. That’s a useful way to freeze your dependencies if you need to make sure that different parts of your project stay compatible with each other. But in most use cases, you don’t want to miss bug fixes since they often include important security patches and (hopefully) don’t break things in doing so.

To allow an npm dependency to update to the latest PATCH version, you can prefix the dependency’s version with the tilde (`~`) character. Here's an example of how to allow updates to any `1.3.x` version.
```
"package": "~1.3.8"
```
n the package.json file, your current rule for how npm may upgrade `@freecodecamp/example` is to use a specific version (`1.2.13`). But now, you want to allow the latest `1.2.x` version.

Use the tilde (`~`) character to prefix the version of `@freecodecamp/example` in your dependencies, and allow npm to update it to any new patch release.
```
{
  "dependencies": {
    "package-name": "~1.3.0"
  }
}
```
위의 코드에서 "~1.3.0"은 1.3.x 버전의 어떤 패치 업데이트든 허용한다는 의미입니다. 즉, 이 패턴을 사용하면 1.3.1, 1.3.2, 1.3.3 등과 같은 패치 업데이트는 자동으로 수락되지만, 1.4.0과 같은 새로운 부 버전은 허용되지 않습니다. 이를 통해 프로젝트가 최신 보안 패치와 버그 수정을 자동으로 받아들일 수 있게 됩니다.

## Use the Caret-Character to Use the Latest Minor Version of a Dependency
Similar to how the tilde we learned about in the last challenge allows npm to install the latest PATCH for a dependency, the caret (`^`) allows npm to install future updates as well. The difference is that the caret will allow both MINOR updates and PATCHes.

Your current version of `@freecodecamp/example` should be `~1.2.13` which allows npm to install to the latest `1.2.x` version. If you were to use the caret (^) as a version prefix instead, npm would be allowed to update to any `1.x.x` version.
```
"package": "^1.3.8"
```
This would allow updates to any `1.x.x` version of the package.

## Remove a Package from Your Dependencies
You have now tested a few ways you can manage dependencies of your project by using the package.json's dependencies section. You have also included external packages by adding them to the file and even told npm what types of versions you want, by using special characters such as the tilde or the caret.

But what if you want to remove an external package that you no longer need? You might already have guessed it, just remove the corresponding key-value pair for that package from your dependencies.

This same method applies to removing other fields in your package.json as well.
