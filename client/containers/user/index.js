import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  return (
    <div className="main-content">
      <div className="page-title">{props.title}</div>
      <p>I am at the User section......</p>
      <p>
        Text messaging From Wikipedia, the free encyclopedia Jump to
        navigationJump to search Txt msg redirects here. For the TV series, see
        Pop-Up Video. A text message using SMS - the 160 character limit of SMS
        led to the wide use of shortened jargons, SMS language Text messaging,
        or texting, is the act of composing and sending electronic messages,
        typically consisting of alphabetic and numeric characters, between two
        or more users of mobile devices, desktops/laptops, or other type of
        compatible computer. Text messages may be sent over a cellular network,
        or may also be sent via an Internet connection. The term originally
        referred to messages sent using the Short Message Service (SMS). It has
        grown beyond alphanumeric text to include multimedia messages using the
        Multimedia Messaging Service (MMS) containing digital images, videos,
        and sound content, as well as ideograms known as emoji (happy faces, sad
        faces, and other icons), and instant messenger applications (usually the
        term is used when on mobile devices). Text messages are used for
        personal, family, business and social purposes. Governmental and
        non-governmental organizations use text messaging for communication
        between colleagues. In the 2010s, the sending of short informal messages
        has become an accepted part of many cultures, as happened earlier with
        emailing.[1] This makes texting a quick and easy way to communicate with
        friends, family and colleagues, including in contexts where a call would
        be impolite or inappropriate (e.g., calling very late at night or when
        one knows the
      </p>
      <p>
        other person is busy with family or work activities). Like e-mail and
        voicemail and unlike calls (in which the caller hopes to speak directly
        with the recipient), texting does not require the caller and recipient
        to both be free at the same moment; this permits communication even
        between busy individuals. Text messages can also be used to interact
        with automated systems, for example, to order products or services from
        e-commerce websites, or to participate in online contests. Advertisers
        and service providers use direct text marketing to send messages to
        mobile users about promotions, payment due dates, and other
        notifications instead of using postal mail, email, or voicemail.
        Contents 1 Terminology 2 History 3 Uses 4 Applications 4.1 Microblogging
        4.2 Emergency services 4.3 Reminders of hospital appointments 4.4
        Commercial uses 4.4.1 Short codes 4.4.2 Text messaging gateway providers
        4.4.3 Premium content 4.5 In workplaces 4.6 Group texts 4.7 Online SMS
        services 4.8 Worldwide use 4.8.1 Europe 4.8.2 United States 4.8.3 Japan
        4.8.4 China 4.8.5 Philippines 4.8.6 New Zealand 4.8.7 Africa 5 Social
        effects 5.1 Effect on language 5.2 Texting while driving 5.3 Texting
        while walking 5.4 Sexting 5.5 In schools 5.5.1 Bullying 5.5.2 Influence
        on perceptions of the student 5.6 Law and crime 5.7 Social unrest 5.8 In
        politics 5.9 Use in healthcare 5.10 Medical concerns 5.11 Etiquette 6
        Challenges 6.1 Spam 6.2 Pricing concerns 6.3 Increasing competition 6.4
        Security concerns 7 In popular culture 7.1 Records and competition 7.2
        Morse code 8 Tattle texting 8.1 Arena security 8.2 Smart cars 9 See also
        10 References Terminology The service is referred to by different
        colloquialisms depending on the region. It may simply be referred to as
        a text in North America, the United Kingdom, Australia, New Zealand, and
        the Philippines, an SMS in most of mainland Europe, or an MMS or SMS in
        the Middle East, Africa, and Asia. The sender of a text message is
        commonly referred to as a texter. History The electrical telegraph
        systems, developed in the early 19th century, used simple electrical
        signals to send text messages. In the late 19th century, the wireless
        telegraphy was developed using radio waves. In 1933, the German
        Reichspost (Reich postal service) introduced the first telex
        service.[2][3] The University of Hawaii began using radio to send
        digital information as early as 1971, using ALOHAnet.[citation needed]
        Friedhelm Hillebrand conceptualised SMS in 1984 while working for
        Deutsche Telekom. Sitting at a typewriter at home, Hillebrand typed out
        random sentences and counted every letter, number, punctuation, and
        space. Almost every time, the messages contained fewer than 160
        characters, thus giving the basis for the limit one could type via text
        messaging.[4] With Bernard Ghillebaert of France Télécom, he developed a
        proposal for the GSM (Groupe Spécial Mobile) meeting in February 1985 in
        Oslo.[5] The first technical solution evolved in a GSM subgroup under
        the leadership of Finn Trosby. It was further developed under the
        leadership of Kevin Holley and Ian Harris (see Short Message
        Service).[6] SMS forms an integral part of SS7 (Signalling System No.
        7).[7] Under SS7, it is a state with a 160 character data, coded in the
        ITU-T T.56 text format, that has a sequence lead in to determine
        different language codes, and may have special character codes that
        permit, for example, sending simple graphs as text. This was part of
        ISDN (Integrated Services Digital Network) and since GSM is based on
        this, it made its way to the mobile phone. Messages could be sent and
        received on ISDN phones, and these can send SMS to any GSM phone. The
        possibility of doing something is one thing, implementing it another,
        but systems existed from 1988 that sent SMS messages to mobile
      </p>
    </div>
  );
};
User.propTypes = {
  title: PropTypes.string.isRequired,
};
export default User;
