import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { BASE_URL } from "../App";

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("");
    const queryClient = useQueryClient();

    const { mutate: createTodo, isPending: isCreating } = useMutation({
        mutationFn: async (e: React.FormEvent) => {
            e.preventDefault();

            if (!newTodo.trim()) {
                alert("Todo body cannot be empty");
                return;
            }

            const res = await fetch(`${BASE_URL}/api/todos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ body: newTodo }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to create todo");
            }

            setNewTodo("");
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
        onError: (error: Error) => {
            alert(`Error: ${error.message}`);
        },
    });

    return (
        <form onSubmit={createTodo}>
            <Flex gap={2}>
                <Input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task"
                    ref={(input) => input && input.focus()}
                />
                <Button
                    mx={2}
                    type="submit"
                    colorScheme="blue"
                    _active={{
                        transform: "scale(.97)",
                    }}
                >
                    {isCreating ? <Spinner size="xs" /> : <span role="img" aria-label="add">➕</span>}
                </Button>
            </Flex>
        </form>
    );
};

export default TodoForm;