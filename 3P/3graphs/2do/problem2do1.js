//
// your undirected graph solution here
//

import { grafo } from '../../../flv/linked/Graphs/Class1.js'

var graph = new grafo(5)
graph.addEdge(1, 2)
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);

graph.showGraph()

graph.dfs(0)