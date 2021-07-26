import tracer from 'dd-trace';

const service = 'nest_test';

/**
 * Datadog APM tracer config
 */

tracer.use('express', {
  enabled: true, // Whether to enable the plugin.
  measured: true, // Whether to measure the span. Can also be set to a key-value pair with span names as keys and booleans as values for more granular control.
  middleware: true, // Whether to enable instrumentation of .middleware spans
  service: `express-${service}`, // The service name to be used for this plugin.
});

tracer.use('aws-sdk', {
  enabled: true,
  measured: true,
  service: `aws_sdk-${service}`,
  splitByAwsService: true, // Whether to add a suffix to the service name so that each AWS service has its own service name.
});

tracer.use('pg', {
  enabled: true,
  measured: true,
  service: `pg-${service}`,
});

tracer.use('redis', {
  enabled: true,
  measured: true,
  service: `redis-${service}`,
});

tracer.init({
  env: service, // Set an application’s environment e.g. prod, pre-prod, stage, etc.
  service: `tracer-${service}`, // The service name to be used for this program.
  enabled: true, // Whether to enable the tracer.
  plugins: true, // Whether or not to enable automatic instrumentation of external libraries using the built-in plugins.
}); // initialized in a different file to avoid hoisting.
console.info('Begin datadog tracing...');

export default tracer;
