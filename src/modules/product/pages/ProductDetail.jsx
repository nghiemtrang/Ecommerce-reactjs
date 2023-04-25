import { useQuery } from "@tanstack/react-query";
import React from "react";
import supabase from "../../../config/supabase";
import { useParams } from "react-router-dom";
import Loading from "../../common/components/Loading";

export default function ProductDetail() {
  const { productId } = useParams();

  const { isLoading, data:product, error } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => supabase.from("product").select().eq("id", productId).single(),
    select: (res) => res.data,
  });
  if (isLoading) return <Loading />;
  console.log(product);
  return <div>ProductDetail {productId}</div>;
}
