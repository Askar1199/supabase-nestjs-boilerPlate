import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { env } from 'src/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // ignoreExpiration: false,
      secretOrKey: env.sup_jwt, // <-- required
    });
  }

  async validate(payload: any) {
    // console.info('===========================', payload);
    // return {
    //   userId: payload.sub,
    //   email: payload.email,
    //   phone: payload.phone,
    //   role: payload.role,
    // };
    return payload; // payload gets assigned to request.user
  }
}
