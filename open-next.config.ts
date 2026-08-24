// @opennextjs/cloudflare の設定
// このサイトは ISR を使わないため incrementalCache は指定しない。
// revalidate / revalidatePath を導入したら r2IncrementalCache を追加すること。
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
