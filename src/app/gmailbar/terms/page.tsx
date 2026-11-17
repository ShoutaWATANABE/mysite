import type { Metadata } from "next";
import Link from "next/link";
import { Bilingual, Mail } from "../doc";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/gmailbar/terms" },
};

const googleTermsUrl = "https://policies.google.com/terms";

export default function GmailBarTerms() {
  return (
    <Bilingual
      title={{ en: "Terms of Service", ja: "利用規約" }}
      en={
        <>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of
            GmailBar (&quot;the app&quot;), a macOS menu bar app developed by
            Shouta Watanabe. By using the app, you agree to these Terms.
          </p>

          <h2>About the app</h2>
          <p>
            GmailBar is a personal tool that the developer builds locally from
            source for personal use. It is not publicly distributed.
          </p>

          <h2>Your Google account</h2>
          <p>
            Your use of Gmail and other Google services through the app is also
            subject to the <a href={googleTermsUrl}>Google Terms of Service</a>.
            You are responsible for the accounts you add to the app and for
            keeping your Mac and its Keychain secure.
          </p>

          <h2>Privacy</h2>
          <p>
            How the app handles your data is described in the{" "}
            <Link href="/gmailbar/privacy">Privacy Policy</Link>.
          </p>

          <h2>Disclaimer of warranties</h2>
          <p>
            The app is provided &quot;as is&quot; and &quot;as available&quot;,
            without warranties of any kind, express or implied, including
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, the developer is not liable
            for any damages arising from the use of, or inability to use, the
            app, including missed mail and delayed or missing notifications.
          </p>

          <h2>Trademarks</h2>
          <p>
            Gmail and Google are trademarks of Google LLC. GmailBar is not
            affiliated with or endorsed by Google.
          </p>

          <h2>Changes to these Terms</h2>
          <p>
            If these Terms change, the updated version will be posted on this
            page with a new effective date.
          </p>

          <h2>Contact</h2>
          <p>
            Shouta Watanabe — <Mail />
          </p>
        </>
      }
      ja={
        <>
          <p>
            この利用規約（以下「本規約」）は、渡邉将大が開発する macOS
            のメニューバーアプリ GmailBar（以下「本アプリ」）の利用について定めるものです。本アプリを利用することで、本規約に同意したものとみなします。
          </p>

          <h2>本アプリについて</h2>
          <p>
            本アプリは、開発者が個人で使うためにソースからローカルでビルドしているツールです。一般には配布していません。
          </p>

          <h2>Google アカウント</h2>
          <p>
            本アプリを通じた Gmail などの Google サービスの利用には、
            <a href={googleTermsUrl}>Google 利用規約</a>
            も適用されます。本アプリに追加するアカウントの管理と、Mac
            およびキーチェーンの安全の確保は、ユーザーの責任で行ってください。
          </p>

          <h2>プライバシー</h2>
          <p>
            本アプリでのデータの取り扱いは、
            <Link href="/gmailbar/privacy">プライバシーポリシー</Link>
            に記載しています。
          </p>

          <h2>保証の否認</h2>
          <p>
            本アプリは「現状のまま」提供され、商品性、特定目的への適合性、権利の非侵害を含め、明示・黙示を問わずいかなる保証もしません。
          </p>

          <h2>責任の制限</h2>
          <p>
            法令で認められる最大限の範囲で、開発者は、本アプリの利用または利用できないことによって生じた損害（メールの見落とし、通知の遅れや欠落を含む）について責任を負いません。
          </p>

          <h2>商標</h2>
          <p>
            Gmail および Google は Google LLC の商標です。本アプリは Google
            と提携しておらず、Google による承認も受けていません。
          </p>

          <h2>本規約の変更</h2>
          <p>
            本規約を変更した場合は、新しい施行日とともにこのページに掲載します。
          </p>

          <h2>連絡先</h2>
          <p>
            渡邉将大 — <Mail />
          </p>
          <p className="text-muted text-sm">
            英語版と日本語版で内容に相違がある場合は、英語版が優先します。
          </p>
        </>
      }
    />
  );
}
