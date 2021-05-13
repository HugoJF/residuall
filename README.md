# Desafio backend - Residuall

Desafio de implementação de uma API de validação de emails com 2 métodos de validação.

O primeiro método de validação rápida revolve testar o final do email.

O segundo método envolve utilização da API EVA da PingUtil.

### Endpoints

#### `GET: /`:

Sempre retorna uma resposta sem resultados com status 200.

#### `GET: /health`:
Sempre retorna mensagem de servidor executando.

#### `POST: /mail/validation/v1`
##### Corpo
- email: email a ser verificado
Retorna validação rápida do email.
##### Exemplo requisição
```json
{
    "email": "eu@hugo.com.br"
}
```
##### Exemplo resposta
```json
{
    "status":"OK",
    "code":200,
    "results":[{
        "email_address":"eu@hugo.com.br",
        "domain":"mail",
        "valid_syntax":true
    }]
}
```

#### `POST: /mail/validation/v3`
##### Corpo
- email: email a ser verificado
Retorna validação pela API EVA do email.
##### Exemplo requisição
```json
{
    "email": "eu@hugo.com.br"
}
```
##### Exemplo resposta

```json
{
    "status":"OK",
    "code":200,
    "results": [{
        "email_address":"pog2@asd.com.br",
        "domain":"asd.com.br",
        "valid_syntax":true,
        "disposable":false,
        "webmail":false,
        "deliverable":false,
        "catch_all":false,
        "gibberish":false,
        "created_at":"2021-05-13T01:21:01.000Z"
    }]
}
```

#### `GET: /mail/validation/v1`

##### Query-string:
- fields: [array|string]: quais campos devem ser retornados
    - Opções válidas: `id`, `email_address`, `domain`, `valid_syntax` 

Retorna todas as entradas no banco de dados da validação rápida


#### `POST: /mail/validation/v3`

##### Query-string:
- fields: [array|string]: quais campos devem ser retornados
    - Opções válidas: `email_address`, `domain`, `valid_syntax`, `disposable`, `webmail`, `deliverable`, `catch_all`, `gibberish
                      `, `created_at`.


Retorna todas as entradas no banco de dados da validação pela API

### O que ficou faltando

Faltou implementar compatibilidade com Docker ou DockerCompose. Isso se deve pelo fato de estar sem acesso a uma m
áquina Linux que eu posso realizar os devidos testes do Dockerfile.

### O que sugiro implementar

Cuidar adequadamente de erros e exceptions, retornando mensagens pela API e o status code adequado.
