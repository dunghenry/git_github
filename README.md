## Git vs GitHub

### Create repository

```
git init
```

### Create file README.md

```
git add README.md
```

### Create commit

```
git commit -m "first commit"
```

### Create branch

```
git branch -M main
```

### Managing remote repositories

```
git remote add origin https://github.com/username/repository_name.git
```

### Pushing to branch

```
git push -u origin main
```

### Unstage

```js
git rm --cached filename.js
```

### Stage

```js
git add .
```

```js
git add filename.js
```

### Add staging and commit

```js
git commit -a -m"message"
```

### Change commit

```js
git commit --amend
```

### Exit git log

```js
q;
```

### Override commit

```js
git push --force
```

### Log

```js
git log --oneline
```

### List branch

```js
git branch
```

### Create new branch

```js
git branch branchname
```

### Checkout branch

```js
git checkout branchname
```

### Create new branch from branch a

```js
git branch b a
```

### Create new branch and checkout

```js
git checkout -b branchname
```

### Merge branch to branch master

```js
git checkout master
git merge branchname
```
