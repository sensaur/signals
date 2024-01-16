import Container from '@mui/material/Container';
import NavBar from "@/components/NavBar";
import TodoListMUI from "@/components/TodoListMUI";
import TodoListPlain from "@/components/TodoListPlain";
import TodoListPlainRep from "@/components/TodoListPlainRep";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Container>
        <TodoList/>
      </Container>
    </main>
  )
}
