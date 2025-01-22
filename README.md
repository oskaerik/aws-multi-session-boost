# aws-multi-session-boost

A Chrome extension that prepends the AWS account ID to the `<title>` element in the AWS Management Console when multi-session support is enabled.

For example, a browser tab with the title `S3 buckets | S3 | us-east-1` will be renamed to `123456789012 | S3 buckets | S3 | us-east-1`.

## Installation

1. Clone this repository.
2. Open `chrome://extensions` in your browser.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the cloned repository.
