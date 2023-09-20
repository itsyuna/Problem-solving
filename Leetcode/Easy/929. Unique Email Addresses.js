const numUniqueEmails = function (emails) {
  let newEmails = '';
  const answer = [];

  for (const email of emails) {
    const findAtIdx = email.indexOf('@');
    const tempLocalName = email.substring(0, findAtIdx);
    const domainName = email.substring(findAtIdx);

    const localName = tempLocalName.replace(/\./g, '');
    const findPlusIdx = localName.indexOf('+');

    if (findPlusIdx !== -1) {
      newEmails = localName.substring(0, findPlusIdx);
      newEmails += domainName;
    } else {
      newEmails = `${localName}${domainName}`;
    }

    if (!answer.includes(newEmails)) answer.push(newEmails);
  }

  return answer.length;
};

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ]) // 2
);
console.log(numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'])); // 3
