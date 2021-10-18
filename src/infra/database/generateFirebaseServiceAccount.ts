const json = {
  type: 'service_account',
  project_id: 'cccat3-9a3d4',
  private_key_id: '611c548231d1ea485c89bbcd0b8bfa20065a8560',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBZwATuFf6RMSk\nQNy+wYq67dZRAy/ApQ7AfBfBqFNlzILkP1+PeSB0DLRYsCNiprR5JmtiCgpP5QI0\nNxFM0aQfiWKNUo+95hf7GdZonKTO2P0fqyVroFR7558QGqGK/n+1LEuBkIzeD8j5\ncDQKeTnU260Qmsp9vG1WHWXns5LVvRafQX8eAXAlLZl8wtdOf59zOl7/nBvrcqhc\nDX4ardUI0R+cAX+LUgu4wcgnNrNy/g3+IWMMtnUy6Cp3E0HkLgeO6kR1pluCT8OI\nmpG0eKmRR7Rg3xKqhE/YU+4Gj6CYFICrkQ+QU8B4Ytlg+nboYSVD8RAN8xwdVwOY\ngiT9rH7rAgMBAAECggEAFYI3e3n2atJoDh5ajmpm29gkjBjvIB0bMWP7nmFyePFQ\nI0M7BPFDHzTkf7KDFO8WRhz0N1CHihAdeSIgrerotksopy/l5Ygn5ZifhD3bhFeU\newelHz2S976wLXHQwm0AVe1Jrmydhfq6bqdAWmPV/yq5Kg4U8/vXKwsU8LpDW7q8\nvwx4/sTUva+Z1z1D2S3sw7Ve28DN+szBOI5zslngU/fgmXfgBnV3TUan3oQDrzws\nQndyFn4MZmmZKxwbQ06cbulJ2xl31WduK9rWdMnkMjrNJzSWAVMWhfOE1LtQW6Ek\nVhMsGxMWGgCUAKv/yDCie71AzEmjUgUfc9vPWG5cJQKBgQDjKSsSg6C3EGKphxqS\nBYqpeecoj2TtaXkduAz3ljS8XddvLBpJomvLvQUyf9mJkljIrDqsMRZntVeSSYzW\nqM0jrHAIa48qp98WJmE72AHEdRFFL7HuscMsqM18rrtVODtu3YCGBlqfTj4zm9QJ\nz7ArJ2vL2z1R5vuI6CE+Xxd6bQKBgQDZ9KqKNDVuuTaAzF2TpfAHJREo8kp5WljL\n8US1oBzoV8t/vkzpbvelBq3hUnBIDsSnc3Rv3/VNT9Vqr2dAPlDUhGh4VVl9SYcM\nazKiJUyNwMSRKBai5RBzz546rn4CdZbuvmYprWgG3w9GRve7DBE1zwvyiKSOz/kv\nqkZ7BtcHtwKBgDq3bXa/p08qYRZI4clUvV7JL8MALapgVPollNR6cu8ton4N/E2E\nOjDTjwBao7Q3q9NTEWdo2M29xgD+GfVydHQAIoVKqBrygWuMSB3b27kYOXqUtX1p\nXXWxvEu6Lpn8iwBBKPN7uPjslI9qfAh9MqA09FwhM1x0RBhDSDSDB+KRAoGARkFU\ne4oKsy8mf2vguggiD9uF5YH8OZPCzbJuqHD9AHPUV8/6sMAhOWOmxtuw77k68JMJ\ntEonow0ZyPLTQGUV3vrzRd6VIwqBaqJfRt7pB0Rc2EFo0octv3bsFRRL7/UBeuGK\nwuJvhs999/RGRFfGcGbV/g7HpHUraI7leyCgTY8CgYEApmls5EhT/8fHkM9hSWn8\nZCoGdRq7NOQN6RcMlMutP56nStbldwEmcIgZXysI+B00HEouNSX75DjMnQXS1zZ3\nn3uAKUuGSDHLPFEnTRwzTK/AG2AguYkYX5iuNCfwQBA3neOf1b+gx2eOomsIzLF+\nwWSdXVfoUbkOl1LD8HH45G8=\n-----END PRIVATE KEY-----\n',
  client_email: 'firebase-adminsdk-dyulk@cccat3-9a3d4.iam.gserviceaccount.com',
  client_id: '110518432184425065819',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dyulk%40cccat3-9a3d4.iam.gserviceaccount.com',
};

export const generateFirebaseServiceAccount = (): any => {
  return json;
};
