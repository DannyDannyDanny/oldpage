# %% imports

import smtplib
import poplib
from poplib  import POP3
from email import parser
import email

# ambassador mail creds
address = "ambassador@qub.dk"
passwd = "2bb-b2V-gE7-JRw"

# %% establish pop connections
pop_conn = poplib.POP3_SSL('pop.one.com')
pop_conn.user(address)
pop_conn.pass_(passwd)

# %% Request message list

message_list = pop_conn.list()

# %%


#mails = [pop_conn.retr(i) for i in range(1, len(pop_conn.list()[1]) + 1)]

print(len(mails))
# %%
messages = [pop_conn.retr(i) for i in range(1, len(pop_conn.list()[1]) + 1)]

if self.pop3_connected:
        try:
            #------Check if email number is valid----------------------
            (numMsgs, totalSize) = self.conn_pop3.stat()
            self.debug(200, "Total number of server messages:    ", numMsgs)
            self.debug(200, "Total size   of server messages:    ", totalSize)
            if  number>numMsgs:
                self.debug(200, "\nSorry - there aren't that many messages in your inbox\n")
                return False
            else:
                (server_msg, body, octets) = self.conn_pop3.retr(number)
                self.debug(200, "Server Message:    "   , server_msg)
                self.debug(200, "Number of Octets:    " , octets)
                self.debug(200, "Message body:")
                for line in body:
                    print(line)
                #end for
    #            return True
            #endif
        finally:
            print("ay")
    #        self.__disconnect__()


# %% ay
a.as_string()

#parsed_mails = [parser.Parser().parsestr("\n".join(m[1])) for m in mails]

j = 40
#[(len(s),type(s)) for s in mails[0][1] if len(s)==76]#[j:j+30]

#some_mail = parser.Parser().parsestr(b''.join(mails[0][1]).decode("utf-8"))

#some_mail = email.message_from_bytes(b''.join(mails[0][1]))

type(some_mail)

some_mail.as_string()

some_mail.get_all('Return-Path')

myd = {}


# %%
#print(messages)
mails = [pop_conn.retr(i) for i in range(1, len(pop_conn.list()[1]) + 1)]

for m in mails:
    print(len(m))

# %% log out of mail
pop_conn.quit()
