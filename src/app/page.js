import Container from '@mui/material/Container';
import NavBar from "@/components/NavBar";
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
