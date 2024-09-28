# Async HTTP Request Handler

This repository contains a TypeScript module for handling asynchronous HTTP requests. The module provides a flexible interface for making HTTP requests and managing their responses.

## Usage

### Installation

You can install via NPM

```bash
npx jsr add @jhenbert/fetch
```

### Usage example

```typescript
import * as mod from "@jhenbert/fetch";

export type Product = {
  name: string;
  price: number;
  image: string;
  type: string;
};

export const getProducts: () => Promise<ServerResponse<Product[], Error>> =
  mod.default<Product[]>(() =>
    fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    )
  );
```
