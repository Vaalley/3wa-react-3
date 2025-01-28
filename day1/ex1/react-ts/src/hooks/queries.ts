import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPizzas, likePizza } from "../api/pizzaApi";
import type { Pizza } from "../api/pizzaApi";

export const usePizzas = () => useQuery<Pizza[]>({
        queryKey: ["pizzas"],
        queryFn: fetchPizzas
});

export const useLikePizza = () => {
        const queryClient = useQueryClient();

        return useMutation({
                mutationFn: (id: number) => likePizza(id),
                onSuccess: () => {
                        // Invalidate the pizzas query to trigger a refetch
                        queryClient.invalidateQueries({ queryKey: ["pizzas"] });
                }
        });
};