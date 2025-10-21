import {
  LinkWrapper,
  ListWrapper,
  ParagraphWrapper,
} from "@/components/common";
import { SubSectionHeading } from "@/components/common/SubSectionHeading";
import { emailIEnjoyReceiving } from "@/constants/standing-invitation";
import { socials } from "@/constants/Social";

const InvitationContent = () => (
  <ParagraphWrapper>
    <div>
      I have a standing invitation for you to reach out to me about anything
      that's on your mind. My email is{" "}
      <LinkWrapper href={socials[0].href}>
        gowthamaan.mail@gmail.com
      </LinkWrapper>
      - that’s the best way to get in contact with me. If I don't respond feel
      free to DM me on my{" "}
      <LinkWrapper href={socials[2].href}>Linkedin</LinkWrapper>.
    </div>

    <div>
      <SubSectionHeading heading="Email I Enjoy Receiving" />
      <ListWrapper
        liProps={{
          className: "!text-base leading-relaxed",
        }}
      >
        {emailIEnjoyReceiving.map((item: string, index) => (
          <li key={`desc-${index}`}>{item}</li>
        ))}
      </ListWrapper>
    </div>

    <div>
      <SubSectionHeading heading="Important!!!" />
      <p>
        If I don’t respond, I apologize in advance; it was me, not you. If I
        don’t respond within a week, feel free to send a follow-up email. I’ll
        make a genuine effort to get back to you.
      </p>
    </div>
    <div>
      <p className="mb-4">Here's your opening line…</p>
      <pre className="whitespace-pre-wrap p-4 rounded-lg font-light text-white dark:text-gray-200 bg-gray-800 dark:bg-gray-900">
        {`Hi,
I'm sending you this email because of the standing invitation page on your website.
I need help with/I want your thoughts on/I'd like to share...
<Now you elaborate>`}
      </pre>
    </div>
  </ParagraphWrapper>
);

export default InvitationContent;
