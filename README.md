# bun-form-test

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.33. [Bun](https://bun.sh)
is a fast all-in-one JavaScript runtime.

# bun-serve-multipart

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition#as_a_header_for_a_multipart_body
  - Additional directives are case-insensitive and have arguments that use
    quoted-string syntax after the = sign
- https://datatracker.ietf.org/doc/html/rfc7578#section-4.2
- https://datatracker.ietf.org/doc/html/rfc7578#section-5.1
  - non-ASCII field names be encoded according to the method in [RFC2047]
- https://datatracker.ietf.org/doc/html/rfc2047
  - This particular document is the third document in the series. It describes
    extensions to RFC 822 to allow non-US-ASCII text data in Internet mail
    header fields.
- https://datatracker.ietf.org/doc/html/rfc822#section-3.2
