# X API SDK for TypeScript

## Introduction

A TypeScript SDK for the X API (formerly Twitter API), built with modern TypeScript practices. This SDK is designed with developers in mind, providing full type safety, ease of use, and support for the latest X API features.

**Note: This SDK is currently under development and not ready for production use.**

This project is a fork of the [official Twitter API SDK](https://github.com/twitterdev/twitter-api-typescript-sdk) and has been rebranded and updated to support the latest X API functionality.

## Features

- **Full type safety**: Comprehensive type definitions for requests and responses.
- **OAuth2 support**: Authenticate securely using X's OAuth2 mechanisms.
- **Built for modern Node.js**: Supports Node.js 16+.
- **Streaming support**: Easy-to-use Async Generators for real-time data.
- **Pagination made simple**: Handle paginated endpoints seamlessly.

## Installing

```bash
npm install x-api-sdk
```

## Quick Start

### Setting Up the Client

```typescript
import { Client } from 'x-api-sdk';

const client = new Client('MY-BEARER-TOKEN');
```

### Examples

#### Consuming a Stream

```typescript
const stream = client.tweets.sampleStream({
  'tweet.fields': ['author_id'],
});
for await (const tweet of stream) {
  console.log(tweet.data?.author_id);
}
```

#### Fetching a Tweet

```typescript
const tweet = await client.tweets.findTweetById('20');
console.log(tweet.data?.text);
```

## Authentication

This SDK supports App-only Bearer Tokens and OAuth 2.0 authentication. See [X API documentation](https://developer.twitter.com/en/docs) for more details.

## Contributing

We welcome contributions to the SDK! If you're interested in helping, here's how to get started:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/x-api-typescript-sdk
   ```
2. **Install Dependencies**:
   ```bash
   pnpm install
   ```
3. **Run the Generation Script**:
   Generate the SDK using the latest OpenAPI spec:

   ```bash
   pnpm generate
   ```

4. **Build**:

   ```bash
   pnpm build
   ```

5. **Test**:
   ```bash
   pnpm test
   ```

## Acknowledgments

This SDK is based on the original [`twitter-api-typescript-sdk`](https://github.com/twitterdev/twitter-api-typescript-sdk), originally developed by Twitter, Inc. under the Apache 2.0 license.

## License

This project is licensed under the Apache 2.0 license. See the [LICENSE](LICENSE) file for details.
