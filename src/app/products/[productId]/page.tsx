import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

/**
 * Generates metadata for a product based on provided parameters.
 * @param {Props} params - The parameters object containing product information.
 * @return {Promise<Metadata>} A promise that resolves to the metadata object.
 */
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {

  // Generate the title in an asynchronous manner.
  const title = await new Promise((resolve) => {
    // Use a timeout to simulate a delay or async operation.
    setTimeout(() => {
      // Resolve the promise with the product title, incorporating the productId.
      resolve(`iPhone ${params.productId}`);
    }, 100); // The delay is set to 100 milliseconds
  });

  // Return the metadata object.
  return {
    // Construct the title for the metadata.
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>;
}
