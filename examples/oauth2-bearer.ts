// Copyright 2021 Twitter, Inc.
// SPDX-License-Identifier: Apache-2.0
// Modifications Copyright 2024 Juan Pedro Martin

import * as dotenv from 'dotenv';
import { Client } from 'x-api-sdk';

dotenv.config();

async function main() {
  const client = new Client(process.env.BEARER_TOKEN as string);
  const { data } = await client.users.findUserByUsername('TwitterDev');
  if (!data) throw new Error("Couldn't find user");
  let count = 0;
  for await (const followers of client.users.usersIdFollowers(data.id)) {
    console.log(followers);
    if (++count == 3) {
      break;
    }
  }
}

main();
