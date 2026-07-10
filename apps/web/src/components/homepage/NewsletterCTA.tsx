// import * as React from 'react';

// import { Container, Heading, Input, PrimaryButton, Section, Text, Card } from '@cosmas/ui';
// import { Stack } from '@cosmas/ui';
// import { cn } from '@cosmas/ui';

// /**
//  * NewsletterCTA
//  *
//  * Subscription call-to-action with existing Input and PrimaryButton.
//  */
// export interface NewsletterCTAProps extends React.HTMLAttributes<HTMLDivElement> {}

// export const NewsletterCTA = function NewsletterCTA({ className, ...props }: NewsletterCTAProps) {
//   return (
//     <Section as="section" spacing="md" className={cn(className)}>
//       <Container>
//         <div {...props}>
//           <Card elevated>
//             <Stack direction="vertical" gap="md" align="stretch">
//               <Heading as="h2">Get Vehicle Updates</Heading>
//               <Text as="p">
//                 Placeholder newsletter text. No submission logic in this foundation phase.
//               </Text>

//               <form>
//                 <Stack direction="vertical" gap="sm" align="stretch">
//                   <Input type="email" label="Email" placeholder="you@example.com" />
//                   <PrimaryButton type="submit">Subscribe</PrimaryButton>
//                 </Stack>
//               </form>
//             </Stack>
//           </Card>
//         </div>
//       </Container>
//     </Section>
//   );
// };
