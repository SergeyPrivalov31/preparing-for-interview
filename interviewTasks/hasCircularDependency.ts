type Vertex = string;
type Graph = Record<Vertex, Vertex[]>;

function hasCircularDependency(entrypoint: Vertex, deps: Graph): boolean {
  // Множество для отслеживания посещенных вершин
  const visited: Set<Vertex> = new Set();
  // Множество для отслеживания вершин, находящихся в текущем пути
  const inPath: Set<Vertex> = new Set();

  // Рекурсивная функция для поиска цикла
  function dfs(vertex: Vertex): boolean {
    // Если вершина уже в текущем пути, значит есть цикл
    if (inPath.has(vertex)) {
      return true;
    }

    // Если вершина уже посещена, но не в текущем пути, цикла нет
    if (visited.has(vertex)) {
      return false;
    }

    // Помечаем вершину как посещенную и добавляем в текущий путь
    visited.add(vertex);
    inPath.add(vertex);

    // Рекурсивно проверяем все зависимые вершины
    for (const neighbor of deps[vertex]) {
      if (dfs(neighbor)) {
        return true;
      }
    }

    // Убираем вершину из текущего пути после завершения рекурсии
    inPath.delete(vertex);
    return false;
  }

  // Запускаем DFS с точки входа
  return dfs(entrypoint);
}

// Примеры
console.log(
  hasCircularDependency("index.js", {
    "index.js": ["foo.js", "bar.js"],
    "bar.js": ["baz.js"],
    "foo.js": ["baz.js"],
    "baz.js": ["x.js"],
    "x.js": ["foo.js"], // <-- cycle: foo - baz - x - foo
  })
); // true

console.log(
  hasCircularDependency("index.js", {
    "index.js": ["foo.js", "bar.js"],
    "bar.js": ["baz.js"],
    "foo.js": ["baz.js"],
    "baz.js": ["x.js"],
  })
); // false
