import { Metadata } from "next";

import { CartCounter } from "@/sections/shopping-cart/cart-counter";

export const metadata: Metadata = {
	title: "Shopping Cart",
	description: "Shopping Cart",
};

export default function CounterPage() {
	return (
		<div className={"flex flex-col items-center justify-center w-full h-full"}>
			<h1>Products in basket</h1>
			<CartCounter value={20} />
		</div>
	);
}
