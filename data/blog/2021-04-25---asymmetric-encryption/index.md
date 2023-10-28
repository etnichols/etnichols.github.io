---
title: 'Digital signature mini-tutorial'
date: '2021-04-25T00:12:03.000Z'
tags:
  - encryption
draft: false
author: Evan Nichols
type: 'tutorial'
---

I've been doing a lot of reading into blockchain recently, and one of the foundational components of this technology is utilizing asymmetric encryption to produce a "digital signature".  These signatures accompany a message sent across the wire, and can be used to verify the authenticity of the sender and the veracity of the message (i.e. ensuring it was not modified maliciously during transmission).

Below is a short demonstration of creating and verifying a digital signature using the `openssl` CLI tool.

1. Generate a private key, also called the `sk` or "secure key" for short. The key will be 2048 bits in length, as specified by the `rsa_keygen_bits` option.

```bash
$ openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
```
<br/>

2. Generate the corresponding public key, also called the `pk` for short.

```bash
$ openssl rsa -pubout -in private_key.pem -out public_key.pem
```
<br/>

3. Create a secret message.

```bash
$ echo “Rock Chalk Jayhawk, go KU!” > secret_message.txt
```
<br/>

4. Produce the digital signature for the secret message. This command is two separate operations: first, it produces a hash of `secret_message.txt` (commonly referred to as the message "digest") using the SHA256 hash function. Then, it encrypts that digest using the `pk`. The process of encrypting the digest is what actually produces the digital signature.

```bash
openssl dgst -sha256 -sign private_key.pem -out digital_signature secret_message.txt
```
<br/>

5. (Optional) the produced `digital_signature` contains binary content by default. To get a human-readable version use the `enc` command.

```bash
$ openssl enc -base64 -in digital_signature -out digital_signature.base64
```
<br/>

The `digital_signature.base64` will look like:

```bash
$ cat digital_signature.base64
$ tjisvQHiIte5wf5J+ZTNYaXk1a/90eQG8Haxu16qSlO/MhP6XjRE1P87XxvbtrOt
YBkK3TwL/xsFMKNcPrR+3O0H0uO82Y0x+3RsgFKnXcm5P+BMaE0VhzRj8fKHojI6
yBF+Uk69upXE0MRjOk00LKnzwEymGsYfdFS7HVpJyLEWAMpDLKK9YtQna1I3Mf2X
0GJ63h/MqWG8ZVh/8d0jRyIV/mWW38AjRgueORmvI1K4bl3c2zjsLnJGWZ+2BE36
/AKAP4eK5g3tjiBHPhYhvP2tWwoV1rpJ7Yjs4fgtERf0bfZJTCN//AjOEsDyQA6T
aTBkU05E9oj9XFhF8VtxoQ==
```
<br/>

6. (Imagination required) Send the `secret_message.txt`, corresponding `digital_signature` and a copy of our `public_key.pem` off to a friend. The friend receives the message, and would like to verify its contents and that it actually came from us. To verify, they attempt to decrypt the digital signature using our `pk`:

```bash
$ openssl dgst -sha256 -verify public_key.pem -signature digital_signature secret_message.txt
$ Verified OK
```
<br/>

7. Now imagine that our `secret_message.txt` was actually intercepted and tampered with by an attacker. You can simulate this by making any change to `secret_message.txt`, e.g. change the message string to "Rock Chalk Jayhawk, go KSU!" Running verification on this modified message will now fail:

```bash
$ echo “Rock Chalk Jayhawk, go KSU!” > secret_message.txt
$ openssl dgst -sha256 -verify public_key.pem -signature digital_signature secret_memo.txt
$ Verification failure
```
<br/>

That's it! Digital signatures provide a convenient way to validate the origin and authenticity of a message.

Thanks for reading!

**References**

- https://www.youtube.com/watch?v=TmA2QWSLSPg
- https://codingbee.net/centos/openssl-demo-encrypting-decrypting-files-using-both-symmetric-and-asymmetric-encryption
- https://www.openssl.org/docs/man1.0.2/man1/rsautl.html
- https://www.openssl.org/docs/man1.0.2/man1/openssl-dgst.html
